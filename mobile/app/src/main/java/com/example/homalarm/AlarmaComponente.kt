package com.example.homalarm

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Switch
import androidx.compose.material3.SwitchDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp

@Composable
fun AlarmaComponente(navigateTo :() -> Unit?) {
    Row(modifier = Modifier.fillMaxWidth().height(96.dp).clickable(onClick = { navigateTo() }) ){
        Column(modifier = Modifier.fillMaxWidth()){
            Row(modifier = Modifier.fillMaxWidth()){
                Row(modifier = Modifier.weight(2f)){
                    Text(text = stringResource(R.string.hora_placeholder),
                        style = MaterialTheme.typography.titleLarge)
                }
                Row(){
                    var checked by remember { mutableStateOf(true) }

                    Switch(
                        checked = checked,
                        onCheckedChange = {
                            checked = it
                        },
                        colors = SwitchDefaults.colors(
                            checkedThumbColor = MaterialTheme.colorScheme.primary,
                            checkedTrackColor = MaterialTheme.colorScheme.onTertiary,
                            uncheckedThumbColor = MaterialTheme.colorScheme.primary,
                            uncheckedTrackColor = MaterialTheme.colorScheme.tertiaryContainer)
                    )


                }
            }
            Row(modifier = Modifier.fillMaxWidth()){
                Text(text = stringResource(R.string.repeticion_placeholder),
                    style = MaterialTheme.typography.bodyMedium,
                    modifier = Modifier.fillMaxWidth(),
                    textAlign = TextAlign.Right)
            }
        }
    }
}