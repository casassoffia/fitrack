import { StyleSheet, View, Text, Pressable, FlatList, Image, TouchableOpacity } from 'react-native';
import { collection, query, onSnapshot, orderBy, getDocs, QuerySnapshot, doc, addDoc, updateDoc, getDoc, where, setDoc, limit, DocumentData, Timestamp } from 'firebase/firestore';
import firebase from "firebase/app";
import "firebase/firestore";
import { auth, db, firebaseConfig } from '../utils/Firebase';
import { getAuth } from 'firebase/auth';


const UserMethods = {
    getNumDias: async function () {
        const auth = getAuth()
        const userLogued = auth.currentUser;
        const q = query(collection(db, "usuarios"), where("email", "==", userLogued?.email))
        let usuario
        let num = 0

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            usuario = doc.data()

            num = usuario.num_dias

        });

        return num

    },
    getUsuarioRegistrado: async function () {
        const auth = getAuth()
        const userLogued = auth.currentUser;
        const q = query(collection(db, "usuarios"), where("email", "==", userLogued?.email))
        let usuario
        let nombre = "", edad = 0, email = "", nivel = "", num_dias = 0, peso = 0, plan = "", sexo = ""

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            usuario = doc.data()
            nombre = usuario.nombre
            edad = usuario.edad
            email = usuario.email
            nivel = usuario.nivel
            num_dias = usuario.num_dias
            peso = usuario.peso
            plan = usuario.plan
            sexo = usuario.sexo

        });

        return { nombre, edad, email, nivel, num_dias, peso, plan, sexo }
    },
    getEjercicio: async function (ref: number) {


        const q2 = query(collection(db, "ejercicios"), where("id", "==", ref))
        const querySnapshot2 = await getDocs(q2);
        let ejercicio

        querySnapshot2.forEach((doc) => {
            ejercicio = doc.data()

        });

        return ejercicio

    },
    getDesayuno: async function (ref: number) {

        const q2 = query(collection(db, "desayunos"), where("id", "==", ref))
        const querySnapshot2 = await getDocs(q2);
        let desayuno
        let nombre = "", receta = "", ingredientes = ""
        querySnapshot2.forEach((doc) => {
            desayuno = doc.data()
            nombre = desayuno.nombre
            receta = desayuno.receta
            ingredientes = desayuno.ingredientes

        });

        return { nombre, receta, ingredientes }

    },
    getDesayunoFromUser: async function (dia: string) {
        const auth = getAuth()
        const userLogued = auth.currentUser;
        const q = query(collection(db, "usuarios"), where("email", "==", userLogued?.email))
        let lunes = "Lunes", martes = "Martes", miercoles = "Miercoles", jueves = "Jueves", viernes = "Viernes"
        let usuario
        let nombre = "", receta = "", ingredientes = ""
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            usuario = doc.data()
            if (dia.valueOf() == lunes.valueOf()) {
                nombre = usuario.comidaLunes.desayuno.nombre
                receta = usuario.comidaLunes.desayuno.receta
                ingredientes = usuario.comidaLunes.desayuno.ingredientes
            } else if (dia.valueOf() == martes.valueOf()) {
                nombre = usuario.comidaMartes.desayuno.nombre
                receta = usuario.comidaMartes.desayuno.receta
                ingredientes = usuario.comidaMartes.desayuno.ingredientes
            } else if (dia.valueOf() == miercoles.valueOf()) {
                nombre = usuario.comidaMiercoles.desayuno.nombre
                receta = usuario.comidaMiercoles.desayuno.receta
                ingredientes = usuario.comidaMiercoles.desayuno.ingredientes
            } else if (dia.valueOf() == jueves.valueOf()) {
                nombre = usuario.comidaJueves.desayuno.nombre
                receta = usuario.comidaJueves.desayuno.receta
                ingredientes = usuario.comidaJueves.desayuno.ingredientes
            } else {
                nombre = usuario.comidaViernes.desayuno.nombre
                receta = usuario.comidaViernes.desayuno.receta
                ingredientes = usuario.comidaViernes.desayuno.ingredientes
            }


        });

        return { nombre, receta, ingredientes }

    },
    getComidaFromUser: async function (dia: string) {
        const auth = getAuth()
        const userLogued = auth.currentUser;
        const q = query(collection(db, "usuarios"), where("email", "==", userLogued?.email))
        let lunes = "Lunes", martes = "Martes", miercoles = "Miercoles", jueves = "Jueves", viernes = "Viernes"
        let usuario
        let nombre = "", receta = "", ingredientes = ""
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            usuario = doc.data()
            if (dia.valueOf() == lunes.valueOf()) {
                nombre = usuario.comidaLunes.comida.nombre
                receta = usuario.comidaLunes.comida.receta
                ingredientes = usuario.comidaLunes.comida.ingredientes
            } else if (dia.valueOf() == martes.valueOf()) {
                nombre = usuario.comidaMartes.comida.nombre
                receta = usuario.comidaMartes.comida.receta
                ingredientes = usuario.comidaMartes.comida.ingredientes
            } else if (dia.valueOf() == miercoles.valueOf()) {
                nombre = usuario.comidaMiercoles.comida.nombre
                receta = usuario.comidaMiercoles.comida.receta
                ingredientes = usuario.comidaMiercoles.comida.ingredientes
            } else if (dia.valueOf() == jueves.valueOf()) {
                nombre = usuario.comidaJueves.comida.nombre
                receta = usuario.comidaJueves.comida.receta
                ingredientes = usuario.comidaJueves.comida.ingredientes
            } else {
                nombre = usuario.comidaViernes.comida.nombre
                receta = usuario.comidaViernes.comida.receta
                ingredientes = usuario.comidaViernes.comida.ingredientes
            }


        });

        return { nombre, receta, ingredientes }

    },
    getComida: async function (ref: number) {
        const q2 = query(collection(db, "comidas"), where("id", "==", ref))
        const querySnapshot2 = await getDocs(q2);
        let comida
        let nombre = "", receta = "", ingredientes = ""
        querySnapshot2.forEach((doc) => {
            comida = doc.data()

            nombre = comida.nombre
            receta = comida.receta
            ingredientes = comida.ingredientes
        });

        return { nombre, receta, ingredientes }

    },
    getCenaFromUser: async function (dia: string) {
        const auth = getAuth()
        const userLogued = auth.currentUser;
        const q = query(collection(db, "usuarios"), where("email", "==", userLogued?.email))
        let lunes = "Lunes", martes = "Martes", miercoles = "Miercoles", jueves = "Jueves", viernes = "Viernes"
        let usuario
        let nombre = "", receta = "", ingredientes = ""
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            usuario = doc.data()
            if (dia.valueOf() == lunes.valueOf()) {
                nombre = usuario.comidaLunes.cena.nombre
                receta = usuario.comidaLunes.cena.receta
                ingredientes = usuario.comidaLunes.cena.ingredientes
            } else if (dia.valueOf() == martes.valueOf()) {
                nombre = usuario.comidaMartes.cena.nombre
                receta = usuario.comidaMartes.cena.receta
                ingredientes = usuario.comidaMartes.cena.ingredientes
            } else if (dia.valueOf() == miercoles.valueOf()) {
                nombre = usuario.comidaMiercoles.cena.nombre
                receta = usuario.comidaMiercoles.cena.receta
                ingredientes = usuario.comidaMiercoles.cena.ingredientes
            } else if (dia.valueOf() == jueves.valueOf()) {
                nombre = usuario.comidaJueves.cena.nombre
                receta = usuario.comidaJueves.cena.receta
                ingredientes = usuario.comidaJueves.cena.ingredientes
            } else {
                nombre = usuario.comidaViernes.cena.nombre
                receta = usuario.comidaViernes.cena.receta
                ingredientes = usuario.comidaViernes.cena.ingredientes
            }


        });

        return { nombre, receta, ingredientes }

    },
    getCena: async function (ref: number) {
        const q2 = query(collection(db, "cenas"), where("id", "==", ref))
        const querySnapshot2 = await getDocs(q2);
        let cena
        let nombre = "", receta = "", ingredientes = ""
        querySnapshot2.forEach((doc) => {
            cena = doc.data()

            nombre = cena.nombre
            receta = cena.receta
            ingredientes = cena.ingredientes
        });

        return { nombre, receta, ingredientes }

    },
    getEjerciciosFromUser: async function (dia: string) {
        const auth = getAuth()
        const userLogued = auth.currentUser;
        const q = query(collection(db, "usuarios"), where("email", "==", userLogued?.email))
        let lunes = "Lunes", martes = "Martes", miercoles = "Miercoles", jueves = "Jueves", viernes = "Viernes"
        let ejercicios: number[] = []
        let usuario
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            usuario = doc.data()
            if (dia.valueOf() == lunes.valueOf()) {
                ejercicios = usuario.ejerciciosLunes

            } else if (dia.valueOf() == martes.valueOf()) {
                ejercicios = usuario.ejerciciosMartes
            } else if (dia.valueOf() == miercoles.valueOf()) {
                ejercicios = usuario.ejerciciosMiercoles
            } else if (dia.valueOf() == jueves.valueOf()) {
                ejercicios = usuario.ejerciciosJueves
            } else {
                ejercicios = usuario.ejerciciosViernes
            }


        });

        return ejercicios

    },
    getNombresAlimentos: async function (tipo: string) {
        const auth = getAuth()
        const userLogued = auth.currentUser;
        const q2 = query(collection(db, "usuarios"), where("email", "==", userLogued?.email))
        let usuario
        let plan = ""
        const querySnapshot2 = await getDocs(q2);
        querySnapshot2.forEach((doc) => {
            usuario = doc.data()

            plan = usuario.plan

        });

        let nombres: any[] = []
        const q = query(collection(db, tipo), where("plan", "==", plan.valueOf()))
        const querySnapshot = await getDocs(q);
        let alimento, nombre
        querySnapshot.forEach((doc) => {
            alimento = doc.data()

            nombre = alimento.nombre
            nombres.push(nombre)
        });
        console.log(nombres)


        return nombres


    },
    getNombresEjerciciosporTipo: async function (tipo: string) {
        const auth = getAuth()
        const userLogued = auth.currentUser;
        const q2 = query(collection(db, "usuarios"), where("email", "==", userLogued?.email))
        let usuario
        let nivel = ""
        const querySnapshot2 = await getDocs(q2);
        querySnapshot2.forEach((doc) => {
            usuario = doc.data()

            nivel = usuario.nivel

        });

        let nombres: any[] = []

        const q = query(collection(db, "ejercicios"), where("tipo", "==", tipo.valueOf()), where("nivel", "==", nivel.valueOf()))
        const querySnapshot = await getDocs(q);
        let ejercicio, nombre
        querySnapshot.forEach((doc) => {
            ejercicio = doc.data()

            nombre = ejercicio.nombre
            nombres.push(nombre)
        });



        return nombres


    },

    getNombresEjercicios: async function (ejerciciosId: Array<number>) {
        let nombres = []
        for (let i = 0; i < ejerciciosId.length; i++) {
            const q = query(collection(db, "ejercicios"), where("id", "==", ejerciciosId[i]))
            const querySnapshot = await getDocs(q);
            let ejercicio, nombre
            querySnapshot.forEach((doc) => {
                ejercicio = doc.data()
                nombre = ejercicio.nombre

            });
            nombres.push(nombre)

        }
        return nombres


    },
    getEjerciciobyName: async function (nombrePasado: string) {


        const q = query(collection(db, "ejercicios"), where("nombre", "==", nombrePasado))
        const querySnapshot = await getDocs(q);
        let ejercicio
        let nombre = "", descripcion = "", tipo = ""
        querySnapshot.forEach((doc) => {
            ejercicio = doc.data()
            nombre = ejercicio.nombre;
            descripcion = ejercicio.descripcion;
            tipo = ejercicio.tipo;

        });


        return { nombre, descripcion, tipo }


    },
    getComidabyName: async function (nombrePasado: string, tipoPasado: string) {
        const q = query(collection(db, tipoPasado), where("nombre", "==", nombrePasado))
        const querySnapshot = await getDocs(q);
        let comida
        let nombre = "", receta = "", ingredientes = ""
        querySnapshot.forEach((doc) => {
            comida = doc.data()
            nombre = comida.nombre;
            receta = comida.receta;
            ingredientes = comida.ingredientes;

        });


        return { nombre, receta, ingredientes }


    },
    sendNameData: async function (name: string, email: string, password: string) {
        const docRef = await addDoc(collection(db, "usuarios"), {
            nombre: name,
            edad: 0,
            email: email,
            nivel: "",
            num_dias: 0,
            peso: 0,
            plan: "",
            sexo: "",

        });

    },
    updateFormData: async function (edad: string, nivel: any, numDias: any, peso: string, plan: any, sexo: any, nombre: any, email: any) {
        const auth = getAuth()
        const userLogued = auth.currentUser;
        const q = query(collection(db, "usuarios"), where("email", "==", userLogued?.email))
        const querySnapshot = await getDocs(q);
        let ref = ""

        querySnapshot.forEach((doc) => {
            ref = doc.id
        });

        const usuarioref = doc(db, "usuarios", ref);
        const update = await setDoc(usuarioref, {
            edad: parseInt(edad),
            nivel: nivel.name,
            num_dias: parseInt(numDias.name),
            email: email,
            nombre: nombre,
            peso: parseInt(peso),

            plan: plan.name,
            sexo: sexo.name,
            semanaLunes: 0,
            semanaMartes: 0,
            semanaMiercoles: 0,
            semanaJueves: 0,
            semanaViernes: 0,
            comidaLunes: { desayuno: {}, comida: {}, cena: {} },
            comidaMartes: { desayuno: {}, comida: {}, cena: {} },
            comidaMiercoles: { desayuno: {}, comida: {}, cena: {} },
            comidaJueves: { desayuno: {}, comida: {}, cena: {} },
            comidaViernes: { desayuno: {}, comida: {}, cena: {} },

        });
    },
    updateUser: async function (nombre: string, email: string, edad: any, nivel: any, num_dias: any, peso: any, plan: any, sexo: any, cambiadoPlan: boolean, cambiadoNivel: boolean) {

        let referenciaUser = ""
        const auth = getAuth()
        const userLogued = auth.currentUser;

        const qUser = query(collection(db, "usuarios"), where("email", "==", userLogued?.email))
        const querySnapshotUser = await getDocs(qUser);
        querySnapshotUser.forEach((doc) => {
            referenciaUser = doc.id
        });
        const usuarioref = doc(db, "usuarios", referenciaUser);
        console.log("nivel")
        console.log(nivel)
        const update = await updateDoc(usuarioref, {
            nombre: nombre,
            email: email,
            edad: edad,
            nivel: nivel,
            num_dias: num_dias,
            peso: peso,
            plan: plan,
            sexo: sexo,

        });
        if (cambiadoPlan) {
            const update = await updateDoc(usuarioref, {
                semanaLunes: 0,
                semanaMartes: 0,
                semanaMiercoles: 0,
                semanaJueves: 0,
                semanaViernes: 0,
                comidaLunes: { desayuno: {}, comida: {}, cena: {} },
                comidaMartes: { desayuno: {}, comida: {}, cena: {} },
                comidaMiercoles: { desayuno: {}, comida: {}, cena: {} },
                comidaJueves: { desayuno: {}, comida: {}, cena: {} },
                comidaViernes: { desayuno: {}, comida: {}, cena: {} },

            });
        }
        if (cambiadoNivel) {
            const update = await updateDoc(usuarioref, {
                ejerciciosLunes: new Array(),
                ejerciciosMartes: new Array(),
                ejerciciosMiercoles: new Array(),
                ejerciciosJueves: new Array(),
                ejerciciosViernes: new Array(),

            });
        }

    },
    crearEjercicio: async function (nombre: string, paso1: string, paso2: string, paso3: string, nivel: any, tipo: any) {
        const q = query(collection(db, "ejercicios"), limit(1), orderBy("id", "desc"))
        const querySnapshot = await getDocs(q);
        let ejercicio, max = 0
        querySnapshot.forEach((doc) => {
            ejercicio = doc.data()
            max = ejercicio.id

        });
        let descripcion = paso1 + "? " + paso2 + "? " + paso3
        let id = max + 1
        await setDoc(doc(db, "ejercicios", id.toString()), {
            nombre: nombre,
            nivel: nivel.name,
            tipo: tipo.name,
            descripcion: descripcion,
            id: id
        });
    },
    crearReceta: async function (nombre: string, paso1: string, paso2: string, paso3: string, tipo: any, plan: any, ingredientes: string) {
        let comida = ""
        if (tipo.name.valueOf() == "Desayuno") {
            comida = "desayunos"
        } else if (tipo.name.valueOf() == "Comida") {
            comida = "comidas"
        } else {
            comida = "cenas"
        }
        console.log(comida)
        const q = query(collection(db, comida), limit(1), orderBy("id", "desc"))
        const querySnapshot = await getDocs(q);
        let tipoComida, max = 0
        querySnapshot.forEach((doc) => {
            tipoComida = doc.data()
            max = tipoComida.id

        });
        let receta = paso1 + "?" + paso2 + " ?" + paso3
        let id = max + 1
        await setDoc(doc(db, comida, id.toString()), {
            nombre: nombre,
            ingredientes: ingredientes,
            plan: plan.name,
            receta: receta,
            id: id
        });
    },


    numeroAlteatorioDesayuno: async function () {
        const auth = getAuth()
        const userLogued = auth.currentUser;
        const q2 = query(collection(db, "usuarios"), where("email", "==", userLogued?.email))
        let usuario
        let plan
        const querySnapshot2 = await getDocs(q2);
        querySnapshot2.forEach((doc) => {
            usuario = doc.data()
            plan = usuario.plan

        });

        const q = query(collection(db, "desayunos"), where("plan", "==", plan))
        let desayunos: Array<DocumentData> = []
        let desayunoAleatorio, numero = 0
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {

            desayunos.push(doc.data())


        });

        desayunoAleatorio = desayunos[Math.floor(Math.random() * desayunos.length)];
        numero = desayunoAleatorio.id

        return numero

    },

    numeroAlteatorioComida: async function () {
        const auth = getAuth()
        const userLogued = auth.currentUser;
        const q2 = query(collection(db, "usuarios"), where("email", "==", userLogued?.email))
        let usuario
        let plan
        const querySnapshot2 = await getDocs(q2);
        querySnapshot2.forEach((doc) => {
            usuario = doc.data()
            plan = usuario.plan

        });

        const q = query(collection(db, "comidas"), where("plan", "==", plan))
        let comidas: Array<DocumentData> = []
        let comidaAleatoria, numero = 0
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {

            comidas.push(doc.data())


        });

        comidaAleatoria = comidas[Math.floor(Math.random() * comidas.length)];
        numero = comidaAleatoria.id

        return numero

    },
    numeroAlteatorioCena: async function () {
        const auth = getAuth()
        const userLogued = auth.currentUser;
        const q2 = query(collection(db, "usuarios"), where("email", "==", userLogued?.email))
        let usuario
        let plan
        const querySnapshot2 = await getDocs(q2);
        querySnapshot2.forEach((doc) => {
            usuario = doc.data()
            plan = usuario.plan

        });

        const q = query(collection(db, "cenas"), where("plan", "==", plan))
        let cenas: Array<DocumentData> = []
        let cenaAleatoria, numero = 0
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {

            cenas.push(doc.data())


        });

        cenaAleatoria = cenas[Math.floor(Math.random() * cenas.length)];
        numero = cenaAleatoria.id

        return numero

    },
    numeroAlteatorioEjercicio: async function (numeros: Array<number>) {
        // const q = query(collection(db, "ejercicios"), limit(1), orderBy("id", "desc"))
        // let cena;
        // let max = 0
        // let min = 1

        // const querySnapshot = await getDocs(q);
        // querySnapshot.forEach((doc) => {
        //     cena = doc.data()
        //     max = cena.id

        // });
        // let numero = 0
        // do {
        //     numero = Math.floor(Math.random() * (max - min + 1)) + min;
        // } while (numeros.includes(numero) && numero != 0)
        const auth = getAuth()
        const userLogued = auth.currentUser;
        const q2 = query(collection(db, "usuarios"), where("email", "==", userLogued?.email))
        let usuario
        let nivel
        const querySnapshot2 = await getDocs(q2);
        querySnapshot2.forEach((doc) => {
            usuario = doc.data()
            nivel = usuario.nivel

        });

        const q = query(collection(db, "ejercicios"), where("nivel", "==", nivel))
        let ejercicios: Array<DocumentData> = []
        let ejerAleatorio, numero = 0
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {

            ejercicios.push(doc.data())


        });
        do {
            ejerAleatorio = ejercicios[Math.floor(Math.random() * ejercicios.length)];
            numero = ejerAleatorio.id
        } while (numeros.includes(numero) && numero != 0)
        return numero

    },
    separarParrafo: async function (ingredientes: string, separado: string) {

        var listado = ingredientes.split(separado)
        console.log("listado")
        console.log(listado)
        return listado

    },
    consejoAleatorio: async function () {
        const q = query(collection(db, "frases"), limit(1), orderBy("id", "desc"))
        let frase: DocumentData = []
        let resultado: string = ''
        let max = 0
        let min = 1

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            frase = doc.data()
            max = frase.id


        });

        let id = 0
        id = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log("id")
        console.log(id)
        const qFrase = query(collection(db, "frases"), where("id", "==", id))
        const querySnapshot2 = await getDocs(qFrase);
        querySnapshot2.forEach((doc) => {
            frase = doc.data()
            resultado = frase.frase


        });

        return frase


    }




}


export default UserMethods;



