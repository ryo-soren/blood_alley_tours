const baseURL = "https://blood-alley-tours-api.onrender.com/api/v1"

export const Booking = {

    create(params){
        console.log(params);
        return fetch(`${baseURL}/bookings`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => res.json())
    },

    show(id){
        return fetch(`${baseURL}/bookings/${id}`).then(res => res.json())
    },

    key(){
        return fetch(`${baseURL}/key`).then(res => {res.json()})
    },

    contact(params){
        return fetch(`${baseURL}/contact_requests`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => res.json())
    }

}