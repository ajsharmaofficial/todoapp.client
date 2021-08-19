import Axios from "axios";
import { TaskItem } from './../Models/TaskItem';
var baseurl = "https://localhost:44327/api/task";

const headers = {
    "Content-Type": "application/json"
};

export function getTasks() {
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

export function saveTask(item) {
    const headers = {
        "Content-Type": "application/json"
    };

    return new Promise((resolve, reject) => {
        Axios.post(baseurl, item, { headers: headers }).then(response => {
            console.log(response.data);
            resolve(response.data);
        });
    });
}