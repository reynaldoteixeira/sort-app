import { Injectable } from '@angular/core';
import Swal, {SweetAlertResult} from 'sweetalert2';

// necessário para ser 'visto' em outros componentes 
@Injectable({
    providedIn : 'root'
})

export class CustomSweetAlertService {

    constructor () {}

    alertWarning () {
        Swal.fire({
            title: 'Error!',
            text: 'Need upload file!',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }
}

