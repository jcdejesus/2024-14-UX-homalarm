package com.example.homalarm


import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import com.example.homalarm.utils.Screen
import com.example.homalarm.utils.generarLista
import com.example.homalarm.utils.verticalGradient


@Composable
fun AlarmasCompartidas(
    navigateTo: (String) -> Unit
) {
    val alarmas = generarLista(5)

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(brush = verticalGradient()),
        contentAlignment = Alignment.Center,
    ) {

        Box(
            modifier = Modifier.fillMaxSize(),
            contentAlignment = Alignment.Center
        ) {
            Column(
                Modifier
                    .padding(
                        top = UiPadding.medium,
                        start = UiPadding.medium,
                        end = UiPadding.medium,
                    )
                    .fillMaxWidth()
                    .fillMaxHeight()
                    .verticalScroll(rememberScrollState())
            ) {
                alarmas.forEach { index ->
                    AlarmaComponente { navigateTo(Screen.EditarAlarmaCompartida.route) }
                    SeparadorComponente()
                }
            }

        }
    }
}