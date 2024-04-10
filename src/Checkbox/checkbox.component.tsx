import {
  Checkbox as MaterialUiCheckbox,
  CheckboxProps as MaterialUiCheckboxProps,
  FormHelperText,
  FormControl,
} from '@material-ui/core'

import * as S from './checkbox.styles'

type CheckboxProps = {
  isChecked: boolean
  isDisabled?: boolean
  handleChange: () => void
  label: string
  name: string
  showError?: boolean
  errorText?: string
}

const GreenCheckbox = ((props: MaterialUiCheckboxProps) => (
  <MaterialUiCheckbox color="default" {...props} />
))

export const Checkbox = ({
  isChecked,
  isDisabled = false,
  handleChange,
  label,
  name,
  showError = false,
  errorText = '',
}: CheckboxProps) => {
  return (
    <FormControl error={showError}>
      <S.StyledFormControlLabel
        control={
          <GreenCheckbox
            checked={isChecked}
            disabled={isDisabled}
            onChange={handleChange}
            name={name}
          />
        }
        label={label}
      />
      {showError && <FormHelperText>{errorText}</FormHelperText>}
    </FormControl>
  )
}
