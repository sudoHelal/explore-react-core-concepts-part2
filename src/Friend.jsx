export default function Friend({friend}){
    console.log(friend);
    if(!friend){
        return null;
    }
    const {name, email, website} = friend;
    return(
        <div className="box">
            <h4>Name: {name}</h4>
            <h4>Email: {email}</h4>
            <h4>Website: {website}</h4>
            


        </div>
    )
}