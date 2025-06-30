import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={"heckbox-etlk6e40e"}
        className="form-checkbox h-4 w-4 text-blue-600 rounded"
        {...props}
      />
      <label htmlFor={"heckbox-etlk6e40e"} className="text-gray-700 text-sm cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;