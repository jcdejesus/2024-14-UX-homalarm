package com.example.homalarm.utils

import com.example.homalarm.R


sealed class Screen(val route: String, val label: String, val icon: Int?, val contentDescription: String?) {
    data object Creadas : Screen("AlarmasCreadas", "Creadas", R.drawable.alarm, "Alarmas Creadas")
    data object Enviadas : Screen("AlarmasEnviadas", "Enviadas", R.drawable.sent, "Alarmas Enviadas")
    data object Recibidas : Screen("AlarmasRecibidas", "Recibidas", R.drawable.received, "Alarmas Recibidas")
    data object CrearAlarma : Screen("CrearAlarma", "Crear Alarma", R.drawable.received, "Crear Alarma")
    data object EditarAlarma : Screen("EditarAlarma", "Editar Alarma", R.drawable.received, "Editar Alarma")
    data object EditarAlarmaCompartida : Screen("EditarAlarmaCompartida", "Editar Alarma Compartida", R.drawable.received, "Editar Alarma Compartida")
    data object EditarAlarmaRecibida : Screen("EditarAlarmaRecibida", "Editar Alarma Recibida", R.drawable.received, "Editar Alarma Recibida")

    /* data object CollectorDetail : Screen("collectors/{collectorId}", "ColeccionistaDetalle", null, null)
    data object ArtistDetail : Screen("artists/{artistId}", "ArtistaDetalle", null, null)
    data object AlbumDetail : Screen("albums/{albumId}", "AlbumDetalle", null, null)
    data object SongList : Screen("{albumId}/songs", label = "SongsList", icon = null, null)
    data object AddSong : Screen("{albumId}/songs/add", label = "AddSong", icon = null, null)
    data object AddAlbum : Screen("albums/add", label = "AddAlbum", icon = R.drawable.white_pencil, null) */
}