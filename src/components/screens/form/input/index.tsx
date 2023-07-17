import {FC, FormEvent, useCallback, useLayoutEffect, useState} from 'react';
import classes from './style.module.scss';
import cn from 'classnames';
import debounce from 'lodash.debounce'

type propsType = {
  label: string;
  name?: string;
  tabIndex?: number;
  pseudoText?: string
  onChange?: (value: string) => void
  value?: string
};

export const Input: FC<propsType> = ({ label, name, tabIndex, pseudoText, onChange, value, }) => {

  const [state, setState] = useState(value);

  const handleChangeDebounce = onChange ? useCallback(debounce((value: string) => onChange(value), 600), [onChange]) : () => {}

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setState(e.currentTarget.value)
    handleChangeDebounce(e.currentTarget.value)
  };

  useLayoutEffect(() => setState(value), [value])

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (pseudoText) setClicked(true)
  }

  if (clicked) return <p className={cn(classes.item, classes.item_clicked)}>{pseudoText}</p>

  return (
    <label className={classes.item} onClick={handleClick}>
      <span className={classes.label}>{label}</span>
      <input
        className={classes.input}
        type="text"
        name={name}
        tabIndex={tabIndex}
        onChange={handleChange}
        value={state}
      />
    </label>
  );
}