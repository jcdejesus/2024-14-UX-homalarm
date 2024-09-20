package com.example.homalarm

import androidx.compose.foundation.layout.padding
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

@Composable
fun SeparadorComponente() {
    HorizontalDivider(thickness = 1.dp, modifier = Modifier.padding(vertical = UiPadding.medium), color = MaterialTheme.colorScheme.outline)
}