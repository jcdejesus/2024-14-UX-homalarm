package com.example.homalarm

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp

@Composable
fun AlarmaOpcionComponente(label: String, text: String) {
    Row(modifier = Modifier.height(56.dp), verticalAlignment = Alignment.CenterVertically){
        Row(modifier = Modifier.weight(1f)){
            Text(text = label, style = MaterialTheme.typography.bodyLarge, modifier = Modifier.height(56.dp).wrapContentHeight(align = Alignment.CenterVertically))
            Text(
                text = text, style = MaterialTheme.typography.bodyLarge,
                fontWeight = FontWeight(700),
                modifier = Modifier.height(56.dp).padding(4.dp, 0.dp).wrapContentHeight(align = Alignment.CenterVertically)
            )
        }
        Image(
            painter = painterResource(id = R.drawable.arrow),
            contentDescription = "",
            contentScale = ContentScale.FillHeight,
            modifier = Modifier
                .width(IconSizes.bottomTab)
                .height(IconSizes.bottomTab)
        )
    }
}