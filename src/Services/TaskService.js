import Axios from "axios";
var baseurl = "https://localhost:44327/api/task";

const headers = {
    "Content-Type": "application/json"
};

export function GetTasks() {
    const headers = {
        "Content-Type": "application/json"
    };

    return new Promise((resolve, reject) => {
        Axios.get(baseurl, { headers: headers }).then(response => {
            console.log(response.data);
            resolve(response.data);
        });
    });
}