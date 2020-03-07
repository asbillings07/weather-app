import React, { useEffect, useState } from 'react'
import { Typography } from '@material-ui/core'
import { useStore } from '../Store'
import { getFullDate, getMonthDay, getWeekDay } from './reusables/DateTimes'

export const Today = () => {
  const { data } = useStore()

  const today = data.list[0]
  return <Typography>Today, {getMonthDay(today.dt)} </Typography>
}
