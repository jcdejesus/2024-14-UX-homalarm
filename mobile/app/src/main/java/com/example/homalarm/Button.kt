package com.example.homalarm

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.ButtonColors
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

@Composable
fun Button(text: String, onClick: () -> Unit){
    TextButton(
        colors = ButtonColors(containerColor = MaterialTheme.colorScheme.primary,
            contentColor = MaterialTheme.colorScheme.onPrimary,
            disabledContainerColor = MaterialTheme.colorScheme.primaryContainer,
            disabledContentColor = MaterialTheme.colorScheme.onTertiary),
        onClick = { onClick() },
        border =  BorderStroke(1.dp, MaterialTheme.colorScheme.onPrimary) ,
        shape = RoundedCornerShape(0),
        modifier = Modifier.height(40.dp)

    ) {
        Text(text)
    }
}