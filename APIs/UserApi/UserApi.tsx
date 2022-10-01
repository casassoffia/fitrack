import { StyleSheet, View, Text, Pressable, FlatList, Image, TouchableOpacity } from 'react-native';
import { collection, query, onSnapshot, orderBy, getDocs, QuerySnapshot, doc, addDoc, updateDoc, getDoc, where, setDoc, limit, DocumentData, Timestamp } from 'firebase/firestore';
import firebase from "firebase/app";
import "firebase/firestore";
import { auth, db, firebaseConfig } from '../../utils/Firebase';
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
        console.log(tipo)
        console.log(plan)
        const q = query(collection(db, tipo), where("plan", "==", plan.valueOf()))
        const querySnapshot = await getDocs(q);
        let alimento, nombre
        querySnapshot.forEach((doc) => {
            alimento = doc.data()

            nombre = alimento.nombre
            nombres.push(nombre)
        });



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
    crearEjercicio: async function (nombre: string, paso1: string, paso2: string, paso3: string, nivel: any, tipo: any) {
        const q = query(collection(db, "ejercicios"), limit(1), orderBy("id", "desc"))
        const querySnapshot = await getDocs(q);
        let ejercicio, max = 0
        querySnapshot.forEach((doc) => {
            ejercicio = doc.data()
            max = ejercicio.id

        });
        let descripcion = paso1 + ". " + paso2 + ". " + paso3
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
        const q = query(collection(db, "desayunos"), limit(1), orderBy("id", "desc"))
        let numAleatorio, desayuno;
        let max = 0
        let min = 1

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            desayuno = doc.data()
            max = desayuno.id

        });
        let numero = 0
        numero = Math.floor(Math.random() * (max - min + 1)) + min;
        return numero

    },

    numeroAlteatorioComida: async function () {
        const q = query(collection(db, "comidas"), limit(1), orderBy("id", "desc"))
        let comida;
        let max = 0
        let min = 1
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            comida = doc.data()
            max = comida.id

        });

        let numero = 0
        numero = Math.floor(Math.random() * (max - min + 1)) + min;

        return numero

    },
    numeroAlteatorioCena: async function () {
        const q = query(collection(db, "cenas"), limit(1), orderBy("id", "desc"))
        let cena;
        let max = 0
        let min = 1

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            cena = doc.data()
            max = cena.id

        });

        let numero = 0
        numero = Math.floor(Math.random() * (max - min + 1)) + min;

        return numero

    },
    numeroAlteatorioEjercicio: async function (numeros: Array<number>) {
        const q = query(collection(db, "ejercicios"), limit(1), orderBy("id", "desc"))
        let cena;
        let max = 0
        let min = 1

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            cena = doc.data()
            max = cena.id

        });
        let numero = 0
        do {
            numero = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (numeros.includes(numero) && numero != 0)


        return numero

    },
    separarIngredientes: async function (ingredientes: string, separado: string) {

        var listado = ingredientes.split(separado)

        return listado

    }




}


export default UserMethods;



