import { forwardRef } from 'react'

const InputField = forwardRef(({ 
  label, 
  type = 'text', 
  placeholder, 
  error,
  ...props 
}, ref) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-text-primary mb-2">
        {label}
      </label>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-lg bg-gray-800 dark:bg-gray-700 border ${
          error 
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
            : 'border-gray-600 dark:border-gray-600 focus:border-accent focus:ring-accent'
        } text-text-primary placeholder:text-text-secondary placeholder:italic focus:outline-none focus:ring-2 transition-all duration-200`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  )
})

InputField.displayName = 'InputField'

export default InputField

