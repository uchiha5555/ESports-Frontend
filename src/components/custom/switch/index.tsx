import React, { FC } from 'react';
import { SwitchButton, SwitchInput, SwitchLabel } from './style';

interface SwitchType {
  id?: string;
  toggled?: boolean;
  onChange: (value: any) => void;
}

const Switch: FC<SwitchType> = ({ id, toggled, onChange }) => {
  return (
    <>
      <SwitchInput
        className="switch-checkbox"
        id={id}
        type="checkbox"
        checked={toggled}
        onChange={onChange}
      />
      <SwitchLabel className="switch-label" htmlFor={id}>
        <SwitchButton className="switch-button" />
      </SwitchLabel>
    </>
  );
};

export default Switch;
