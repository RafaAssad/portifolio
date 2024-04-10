import { FormControlLabel } from '@material-ui/core'
import styled, { css } from 'styled-components'

export const StyledFormControlLabel = styled(FormControlLabel)`
  ${({ theme }) => css`
    .MuiTypography-body1 {
      font-family: "Courier New", Courier, monospace;
    }
    .MuiButtonBase-root {
      color: #d1d1d1;
    }
  `}
`
