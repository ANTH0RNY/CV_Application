interface myProps{
    profile: string
}
export default function CvSummary({profile}:myProps) {
    return (
      <div className='cv-summary'>
        <h2 className="cv-subheading">SUMMARY</h2>
        <p>{profile}</p>
      </div>
    )
  }