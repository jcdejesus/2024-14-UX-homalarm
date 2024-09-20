package com.example.homalarm.utils

import androidx.compose.runtime.Composable

@Composable
fun generarLista(
    cantidad: Int
): MutableList<Int> {
    return generateSequence { cantidad }.take(cantidad).toMutableList()
}

