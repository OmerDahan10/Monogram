import { ReactComponent as OptionIcon } from '../img/svg/option.svg';

export function ProfileHeaderChange({userProfileShow ,connectedUser, onProfileOptions}) {
    // const onProfileOptions= this.onProfileOptions
    // const {connectedUser} = this.props.connectedUser
    // const {userProfileShow} = this.props.userProfileShow

    return (
        <>
            {userProfileShow._id === connectedUser._id && (
                <div className="profile-edit-options">
                    <div className="profile-edit">
                        <button>Edit Profile</button>
                    </div>
                    <div className="profile-option">
                        <button onClick={onProfileOptions}><OptionIcon /></button>
                    </div>
                </div>
            )}
            {userProfileShow._id !== connectedUser._id && (
                <div className="profile-msg-unfo">
                    <div className="profile-msg">
                        <button>Messge</button>
                    </div>
                    <div className="profile-unfollow">
                        <button>Unfollow</button>
                    </div>
                </div>
            )}
        </>
    )
}