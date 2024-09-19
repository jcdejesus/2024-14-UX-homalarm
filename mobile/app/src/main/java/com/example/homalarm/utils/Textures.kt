package com.example.homalarm.utils

import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.TileMode

@Composable
fun verticalGradient(
): Brush {
    return Brush.verticalGradient(listOf(MaterialTheme.colorScheme.background, MaterialTheme.colorScheme.onBackground), startY = 0.0f, tileMode = TileMode.Mirror)
}
