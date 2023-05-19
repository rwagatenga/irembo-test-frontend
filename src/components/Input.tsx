import React from 'react';

const Input: React.FC<{
  id: string;
  type: React.HTMLInputTypeAttribute;
  name: string;
  placeholder?: string;
  value?: string | number;
  options?: Array<string | number>;
  label: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
}> = ({
  id,
  value,
  name,
  placeholder,
  options,
  label,
  onChange,
  error = '',
  disabled = false,
  required = false,
  type,
}) => {
  return (
    <div className='mb-6'>
      <label
        htmlFor={id}
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
      >
        {label}
      </label>
      {type === 'select' ? (
        <select
          name={name}
          placeholder={placeholder}
          className="className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'"
          onChange={onChange}
        >
          {options && Array.isArray(options)
            ? options.map((option, i) => (
                <option value={option} key={i}>
                  {option}
                </option>
              ))
            : null}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          required={required}
          disabled={disabled}
        />
      )}

      {error?.length >= 1 && (
        <span className='text-red-500 text-sm'>{error}</span>
      )}
    </div>
  );
};

export default Input;
