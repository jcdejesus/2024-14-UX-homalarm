package com.example.homalarm

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.IntrinsicSize
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material3.BottomAppBar
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.NavigationBarItemDefaults
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults.topAppBarColors
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.TileMode
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.semantics.contentDescription
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import com.example.homalarm.ui.theme.HomalarmTheme
import com.example.homalarm.utils.Screen
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            HomalarmTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    ScaffoldBase()
                }
            }
        }
    }
}

fun navigateToWithState(route:String, navController: NavController): Unit{
    navController.navigate(route){
        popUpTo(navController.graph.startDestinationId) {
            saveState = false
        }
        launchSingleTop = true
        restoreState = true
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ScaffoldBase(){
    val items = listOf(
        Screen.Creadas,
        Screen.Enviadas,
        Screen.Recibidas,
    )

    val navController = rememberNavController()

    Scaffold(
        topBar = {
            TopAppBar(
                colors = topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.background,
                    titleContentColor = MaterialTheme.colorScheme.onPrimary,
                ),
                title = {
                    val navBackStackEntry by navController.currentBackStackEntryAsState()
                    val currentDestination = navBackStackEntry?.destination?.route
                    val title = when(currentDestination) {
                        Screen.EditarAlarmaCompartida.route -> Screen.EditarAlarmaCompartida.label
                        Screen.EditarAlarma.route -> Screen.EditarAlarma.label
                        Screen.EditarAlarmaRecibida.route -> Screen.EditarAlarmaRecibida.label
                        else -> stringResource(R.string.top_bar_title)
                    }
                    title?.let { Text(it,modifier = Modifier.fillMaxWidth(), textAlign = TextAlign.Center, style = MaterialTheme.typography.titleMedium) }
                }
            )
        },
        bottomBar = {
            BottomAppBar(containerColor = MaterialTheme.colorScheme.background) {

                    NavigationBar(
                        containerColor =MaterialTheme.colorScheme.background
                    ) {
                        items.forEach { screen ->
                            NavigationBarItem(
                                colors = NavigationBarItemDefaults.colors(
                                    selectedIconColor = MaterialTheme.colorScheme.primary,
                                    unselectedIconColor = MaterialTheme.colorScheme.secondary,
                                    indicatorColor = MaterialTheme.colorScheme.primary,
                                    unselectedTextColor = MaterialTheme.colorScheme.onPrimary
                                ),
                                /* selected = currentDestination?.hierarchy?.any {
                                    it.route == screen.route
                                } == true, */
                                selected = true,
                                label = {
                                    Text(text = screen.label, color = MaterialTheme.colorScheme.onPrimary, modifier = Modifier.semantics { this.contentDescription = screen.contentDescription ?: "" })
                                },
                                onClick = {
                                    // navigateToWithState(screen.route, innerNavController)
                                },
                                alwaysShowLabel = true,
                                icon = {
                                    Image(
                                        painter = painterResource(id = screen.icon!!),
                                        contentDescription = screen.contentDescription,
                                        contentScale = ContentScale.FillHeight,
                                        modifier = Modifier
                                            .width(IconSizes.bottomTab)
                                            .height(IconSizes.bottomTab)
                                    )
                                }
                            )
                        }
                    }
            }
        }
    ){
        innerPadding ->
        // A surface container using the 'background' color from the theme
        NavHost(navController = navController, startDestination = Screen.Creadas.route) {
            composable(Screen.Creadas.route){
                Box(modifier = Modifier.padding((innerPadding))){
                    AlarmasCreadas(navigateTo = { route: String ->
                        navigateToWithState(
                            route,
                            navController
                        )
                    })
                }
            }
        }
    }
}
