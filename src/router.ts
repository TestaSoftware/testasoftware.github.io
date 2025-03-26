// Generouted, changes to this file will be overridden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/about`
  | `/about/private-key`
  | `/about/resume`
  | `/articles`
  | `/articles/2021-08-18-vim-survival-guide`
  | `/articles/2021-12-12-using-a-single-github-account-for-personal-and-professional-use`
  | `/articles/2024-09-26-vim-survival-redux`
  | `/articles/archive/2012-08-08-natural-string-sorting`
  | `/articles/archive/2013-01-25-git-branching-workflow-part-1-overview`

export type Params = {}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
