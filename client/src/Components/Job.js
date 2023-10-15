

export default function Job({ job }) {
  return (
    <div className={'job'}>
      <div>{job.jobtitle}</div>
      <div>{job.company}</div>
    </div>
  )
}