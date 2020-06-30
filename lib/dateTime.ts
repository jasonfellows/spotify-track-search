export function msToTime(duration: number) {
   const
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
    minutesStr = (hours > 0 && minutes < 10) ? "0" + minutes : minutes,
    secondsStr = (seconds < 10) ? "0" + seconds : seconds

  if (hours > 0) return hours + ":" + minutesStr + ":" + secondsStr
  if (minutes > 0) return minutesStr + ":" + secondsStr

  return seconds + 's'
}
