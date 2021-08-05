<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>TAMBAH KELAS</h4>
                        <hr>

                        <form @submit.prevent="store">
                            <div class="form-group">
                                <label for="KdSekolah" class="font-weight-bold">Kode Sekolah</label>
                                <input type="text" class="form-control" v-model="kelas.KdSekolah">
                                <!-- validation -->
                                <div v-if="validation.KdSekolah" class="mt-2 alert alert-danger">
                                    {{ validation.KdSekolah[0] }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="Kelas" class="font-weight-bold">Kelas</label>
                                <input type="text" class="form-control" v-model="kelas.Kelas">
                                <!-- validation -->
                                <div v-if="validation.Kelas" class="mt-2 alert alert-danger">
                                    {{ validation.Kelas[0] }}
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">SIMPAN</button>
                        </form>                        

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

export default {

    setup() {

        //state kelass
        const kelas = reactive({
            KdSekolah: '',
            Kelas: ''
        })

        //state validation
        const validation = ref([])

        //vue router
        const router = useRouter()

        //method store
        function store() {

            let KdSekolah   = kelas.KdSekolah
            let Kelas = kelas.Kelas

            axios.post('http://localhost:8000/api/kelas', {
                KdSekolah: KdSekolah,
                Kelas: Kelas
            }).then(() => {
                //redirect ke kelas index
                router.push({
                    name: 'kelas.index'
                })

            }).catch(error => {
                //assign state validation with error 
                validation.value = error.response.data
            })

        }

        //return
        return {
            kelas,
            validation,
            router,
            store
        }

    }

}
</script>

<style>
    body{
        background: lightgray;
    }
</style>