import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

import { Error } from '../Error'
import { Width } from '../Width'

export const Text: React.FC<
  TextField & {
    errors: Partial<FieldErrorsImpl>
    register: UseFormRegister<FieldValues>
  }
> = ({ name, defaultValue, errors, label, register, required, width }) => {
  return (
    <Width width={width}>
      <div className="flex items-center gap-4 border-b border-accent pb-2">
        <Label htmlFor={name} className="flex-shrink-0 w-32">
          {label}

          {required && (
            <span className="required">
              * <span className="sr-only">(required)</span>
            </span>
          )}
        </Label>
        <Input
          defaultValue={defaultValue}
          id={name}
          type="text"
          className="border-none shadow-none focus:ring-0 focus:outline-none bg-transparent"
          {...register(name, { required })}
        />
      </div>
      {errors[name] && <Error name={name} />}
    </Width>
  )
}
