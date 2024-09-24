package com.example.homalarm

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import com.example.homalarm.utils.generarLista
import com.example.homalarm.utils.verticalGradient

@Composable
fun CrearAlarma(
    navigateTo: (String) -> Unit
) {
    val alarmas = generarLista(1)

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(brush = verticalGradient()),
        contentAlignment = Alignment.Center,
    ) {

        Column(
            modifier = Modifier.fillMaxSize()
                .fillMaxHeight()
                .verticalScroll(rememberScrollState())
            ,

        ) {
            Row(
                Modifier
                    .padding(
                        top = UiPadding.medium,
                        start = UiPadding.medium,
                        end = UiPadding.medium,
                    )
                    .height(300.dp)
                    .wrapContentHeight(align = Alignment.CenterVertically)
            ) {
                    Text( text="12:00 pm", modifier = Modifier.fillMaxWidth().height(56.dp).wrapContentHeight(align = Alignment.CenterVertically), textAlign = TextAlign.Center,  style = MaterialTheme.typography.titleLarge)
            }

            Column(
                Modifier
                    .padding(
                        top = UiPadding.medium,
                        start = UiPadding.medium,
                        end = UiPadding.medium,
                    )
                    .fillMaxWidth()
            ) {
                    SeparadorComponente()
                    AlarmaOpcionComponente("Repetir: ", "Nunca")
                    SeparadorComponente()
                    AlarmaOpcionComponente("Nota: ", "Algo para recordar")
                    SeparadorComponente()
                    AlarmaOpcionComponente("Sonidos: ", "Sin sonido")
                    SeparadorComponente()
                    AlarmaOpcionComponente("Vibración: ", "Sin sonido")
                    SeparadorComponente()

            }

        }
    }
}