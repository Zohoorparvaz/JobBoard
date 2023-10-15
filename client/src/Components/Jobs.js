import Typography from '@mui/material/Typography';
import Job from './Job'

export default function Jobs({ jobs }) {
  return (
    <div className={'jobs'}>
      <Typography variant='h1'>New Jobs for Software Development</Typography>
      {
        jobs.map(job => <Job job={job} />)
      }
    </div>
  )
}