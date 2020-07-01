import React, {
  FC,
  useRef,
  KeyboardEvent,
  ComponentProps,
  RefObject,
  MouseEvent,
  useLayoutEffect,
} from 'react';
import { ArrowDropDown as ArrowIcon } from '@material-ui/icons';
import './Select.scss';
import {
  useCallbackOnExternalAction,
  AnyFunction,
  useSwitch,
  countChildrenHeight,
} from 'utils';

export type OptionValue = string | number;
export type Content = string | number;

export interface Option {
  value: OptionValue;
  content?: Content;
}

export interface SelectProps extends ComponentProps<'select'> {
  options: Option[];
  value?: OptionValue;
  onChange: AnyFunction;
  display?: Content;
  maxDisplayOptions?: number | 'all';
  containerClassName?: string;
  selectClassName?: string;
  optionsClassName?: string;
  optionClassName?: string;
  labelRef?: RefObject<HTMLLabelElement | null>;
  styles?: void;
}

export const Select: FC<SelectProps> = ({
  options,
  value,
  onChange,
  display,
  maxDisplayOptions = 5,
  containerClassName: derivedContainerClassName,
  selectClassName,
  optionsClassName,
  optionClassName,
  labelRef,
  onClick,
  ...selectAttributes
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLUListElement>(null);
  const [expand, enableExpand, disableExpand] = useSwitch(false);

  useLayoutEffect(() => {
    if (!optionsRef.current) return;
    if (!expand) {
      optionsRef.current.style.height = '0px';
      return;
    }

    optionsRef.current.style.height = countChildrenHeight(
      optionsRef.current,
      maxDisplayOptions
    );
  });

  useCallbackOnExternalAction(
    [containerRef.current, labelRef?.current],
    disableExpand,
    expand
  );

  const toDisplay =
    display ||
    options.find(option => option.value === value)?.content ||
    value ||
    '';

  let containerClassName = 'select';
  if (expand) containerClassName += '--expand';
  if (derivedContainerClassName)
    containerClassName += ' ' + derivedContainerClassName;

  const handleChange = (newValue: OptionValue) => {
    if (value === newValue) return;
    onChange(newValue);
    disableExpand();
  };

  const onOptionKeyDown = (
    { key }: KeyboardEvent<HTMLLIElement>,
    value: OptionValue
  ) => {
    if (key !== 'Enter') return;
    handleChange(value);
  };

  const onSelectKeyDown = ({ key }: KeyboardEvent<HTMLDivElement>) => {
    if (!expand && (key === 'Enter' || key === ' ')) {
      enableExpand();
    } else if (expand && key === 'Escape') {
      disableExpand();
    }
  };

  const onSelectClick = (event: MouseEvent<any>) => {
    // prevent label click if it's exist
    event.preventDefault();

    if (expand) disableExpand();
    else enableExpand();

    if (onClick) onClick(event);
  };

  const optionTabIndex = expand ? 0 : -1;

  return (
    <div
      className={containerClassName}
      onKeyDown={onSelectKeyDown}
      ref={containerRef}
      onClick={onSelectClick}
    >
      <select className="select__native-select" {...selectAttributes} />
      <div
        className={`select__select${
          selectClassName ? ' ' + selectClassName : ''
        }`}
        tabIndex={0}
      >
        <div className="select__arrow-container">
          <ArrowIcon className="select__arrow" />
        </div>
        <span className="select__display">{toDisplay}</span>
        <div className="select__options-container">
          <ul
            className={`select__options${
              optionsClassName ? ' ' + optionsClassName : ''
            }`}
            ref={optionsRef}
          >
            {options.map(({ value, content }) => (
              <li
                className={`select__option${
                  optionClassName ? ' ' + optionClassName : ''
                }`}
                key={value}
                onClick={() => handleChange(value)}
                onKeyDown={e => onOptionKeyDown(e, value)}
                tabIndex={optionTabIndex}
              >
                {content || value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
