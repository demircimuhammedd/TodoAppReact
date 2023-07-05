function User({name, surname, isLoggedIn, friends}) {
    return (
        <>
            <p>
                {isLoggedIn && `My name is ${name} ${surname}`}
                {!isLoggedIn && `Giriş başarısız`}

                {
                    friends.map((friend) => (
                        <h1> {friend.name} </h1>
                    ))
                }
            </p>
        </>
    );
}

export default User;