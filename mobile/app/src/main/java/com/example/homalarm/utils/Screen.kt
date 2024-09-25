package com.example.homalarm.utils

import com.example.homalarm.R


sealed class Screen(val route: String, val label: String, val icon: Int?, val contentDescription: String?, val alternativeRoute: String?) {
    data object Creadas : Screen("AlarmasCreadas", "Creadas", R.drawable.alarm, "ALARMAS CREADAS", "CrearAlarmaNoDatos")
    data object Enviadas : Screen("AlarmasEnviadas", "Enviadas", R.drawable.sent, "ALARMAS COMPARTIDAS", null)
    data object Recibidas : Screen("AlarmasRecibidas", "Recibidas", R.drawable.received, "ALARMAS RECIBIDAS", null)
    data object CrearAlarma : Screen("CrearAlarma", "Crear Alarma", R.drawable.received, "CREAR ALARMA", null)

    data object CrearAlarmaNoDatos : Screen("CrearAlarmaNoDatos", "Crear Alarma No Datos", null, null, null)

    data object EditarAlarma : Screen("EditarAlarma", "EDITAR ALARMA", R.drawable.received, "EDITAR ALARMA",null)
    data object EditarAlarmaCompartida : Screen("EditarAlarmaCompartida", "EDITAR ALARMA", R.drawable.received, "EDITAR ALARMA COMPARTIDA", null)
    data object EditarAlarmaRecibida : Screen("EditarAlarmaRecibida", "EDITAR ALARMA", R.drawable.received, "EDITAR ALARMA RECIBIDA",null)
}