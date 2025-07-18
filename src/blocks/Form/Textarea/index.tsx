import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { Label } from '@/components/ui/label'
import { Textarea as TextAreaComponent } from '@/components/ui/textarea'
import React from 'react'

import { Error } from '../Error'
import { Width } from '../Width'

export const Textarea: React.FC<
  TextField & {
    errors: Partial<FieldErrorsImpl>
    register: UseFormRegister<FieldValues>
    rows?: number
  }
> = ({ name, defaultValue, errors, label, register, required, rows = 3, width }) => {
  return (
    <Width width={width}>
      <div className="flex items-start gap-4 border-b border-accent pb-2">
        <Label htmlFor={name} className="flex-shrink-0 w-32 pt-2">
          {label}

          {required && (
            <span className="required">
              * <span className="sr-only">(required)</span>
            </span>
          )}
        </Label>

        <TextAreaComponent
          defaultValue={defaultValue}
          id={name}
          rows={rows}
          className="border-none shadow-none focus:ring-0 focus:outline-none bg-transparent resize-none"
          {...register(name, { required: required })}
        />
      </div>

      {errors[name] && <Error name={name} />}
    </Width>
  )
}
