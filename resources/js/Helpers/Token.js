class Token{

    isValid(token){
        const payload = this.payload(token)
        if (payload) {
            return payload.iss = "http://vueproject.loc/api/auth/login" || "http://vueproject.loc/api/auth/register" ? true : false
        }
        return false
    }


    payload(token){
        console.log(token)
        var base64Url = token.split(".")[1];
        // console.log(base64Url)
        var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        var jsonPayload = decodeURIComponent(
            atob(base64)
                .split("")
                .map(function(c) {
                    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join("")
        );

        return JSON.parse(jsonPayload);
    }





}

export default Token = new Token()
