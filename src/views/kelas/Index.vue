<template>
        <div class="main-container">
            <div class="container">
                <div class="card">
                    <div class="card-header border-0 bg-none">
                        <div class="row">
                            <div class="col align-self-center">
                                <h6 class="mb-0">Data Kelas</h6>
                            </div>
                            <div class="col-auto align-self-center">
                                <router-link :to="{name: 'kelas.create'}" class="btn btn-default btn-sm rounded">Tambah</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Kode Sekolah</th>
                                        <th scope="col">Kelas</th>
                                        <th scope="col">Opsi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(kelas, index) in kelass" :key="index">
                                        <td>{{ kelas.KdSekolah }}</td>
                                        <td>{{ kelas.Kelas }}</td>
                                        <td class="text-center">
                                            <router-link :to="{name: 'kelas.edit', params:{Kelas: kelas.Kelas }}" class="btn btn-sm btn-primary mr-1">EDIT</router-link>
                                            <button @click.prevent="kelasDelete(kelas.Kelas)" class="btn btn-sm btn-danger ml-1">DELETE</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'

export default {

    setup() {

        //reactive state
        let kelass = ref([])

        //mounted
        onMounted(() => {

            //get API from Laravel Backend
            axios.get('http://localhost:8000/api/kelas')
            .then(response => {
              
              //assign state kelass with response data
              kelass.value = response.data.data

            }).catch(error => {
                console.log(error.response.data)
            })

        })
        function kelasDelete(Kelas) {
            
            //delete data kelas by Kelas
            axios.delete(`http://localhost:8000/api/kelas/${Kelas}`)
            .then(() => {
                        
                //splice kelass 
                kelass.value.splice(kelass.value.indexOf(Kelas), 1);

                }).catch(error => {
                    console.log(error.response.data)
                })

        }

        //return
        return {
            kelass,
            kelasDelete
        }

    }

}
</script>

<style>
    body{
        background: lightgray;
    }
</style>