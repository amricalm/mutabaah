<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>DATA KELAS</h4>
                        <hr>
                        <router-link :to="{name: 'kelas.create'}" class="btn btn-md btn-success">TAMBAH KELAS</router-link>

                        <table class="table table-striped table-bordered mt-4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Kode Sekolah</th>
                                    <th scope="col">Kelas</th>
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