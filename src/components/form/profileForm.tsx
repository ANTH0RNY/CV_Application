interface myProps{
    profile: string,
    handleFunction: Function
}

export default function ProfileForm({profile, handleFunction}: myProps) {
    return (
      <div className="profile-name a-form">
        <textarea placeholder="About yourself" value={profile} onChange={(e)=>{handleFunction(e.target.value)}}/>
      </div>
    );
  }