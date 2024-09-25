package com.example.homalarm

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import com.example.homalarm.utils.verticalGradient

@Composable
fun EditarAlarmaComaprtida(
    navigateTo: (String) -> Unit?
) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(brush = verticalGradient()),
        contentAlignment = Alignment.Center,
    ) {

        Column(
            modifier = Modifier.fillMaxSize()
                .fillMaxHeight()
                .verticalScroll(rememberScrollState()),
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
                Text( text= stringResource(R.string.hora_placeholder), modifier = Modifier.fillMaxWidth().height(56.dp).wrapContentHeight(align = Alignment.CenterVertically), textAlign = TextAlign.Center,  style = MaterialTheme.typography.titleLarge)
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
                AlarmaOpcionComponente(stringResource(R.string.repetir_label), stringResource(R.string.repetir_value))
                SeparadorComponente()
                AlarmaOpcionComponente(stringResource(R.string.nota_label), stringResource(R.string.nota_value))
                SeparadorComponente()
                AlarmaOpcionComponente(stringResource(R.string.sonido_label), stringResource(R.string.sonido_value))
                SeparadorComponente()
                AlarmaOpcionSwitchComponente(stringResource(R.string.vibracion_label), stringResource(R.string.vibracion_value))
                SeparadorComponente()
                AlarmaOpcionComponente(stringResource(R.string.compartido_label), stringResource(R.string.compartido_value))
            }
        }
    }
}