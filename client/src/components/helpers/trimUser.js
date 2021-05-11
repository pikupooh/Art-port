function trimUser (user) {
    var temp = {
        ...user,
    };

    delete temp.about;
    delete temp.email;
    delete temp.dob;

    return temp;
};

export default trimUser;