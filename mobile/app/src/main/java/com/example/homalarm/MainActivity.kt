package com.example.homalarm

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.Add
import androidx.compose.material3.BottomAppBar
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.FloatingActionButton
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.NavigationBarItemDefaults
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Snackbar
import androidx.compose.material3.SnackbarDuration
import androidx.compose.material3.SnackbarHost
import androidx.compose.material3.SnackbarHostState
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults.topAppBarColors
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.semantics.contentDescription
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.text.style.TextAlign
import androidx.navigation.NavController
import androidx.navigation.NavDestination.Companion.hierarchy
import com.example.homalarm.ui.theme.HomalarmTheme
import com.example.homalarm.utils.Screen
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.launch

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
    val navBackStackEntry by navController.currentBackStackEntryAsState()
    val currentDestination = navBackStackEntry?.destination

    val scope = rememberCoroutineScope()
    val snackbarHostState = remember { SnackbarHostState() }

    val crearAlarmaMensaje = stringResource(R.string.crear_alarma_mensaje_value);
    val actualizarAlarmaMensaje = stringResource(R.string.actualizar_alarma_mensaje_value);

    Scaffold(
        snackbarHost = {
            SnackbarHost(hostState = snackbarHostState){
                Snackbar(
                    snackbarData = it,
                    containerColor = MaterialTheme.colorScheme.tertiary,
                    contentColor = MaterialTheme.colorScheme.onPrimary
                )
            }
        },
        topBar = {
            val navBackStackEntry by navController.currentBackStackEntryAsState()
            val currentDestination = navBackStackEntry?.destination?.route
            TopAppBar(
                colors = topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.background,
                    titleContentColor = MaterialTheme.colorScheme.onPrimary,
                ),
                title = {
                    val title = when(currentDestination) {
                        Screen.EditarAlarmaCompartida.route -> Screen.EditarAlarmaCompartida.label
                        Screen.EditarAlarma.route -> Screen.EditarAlarma.label
                        Screen.EditarAlarmaRecibida.route -> Screen.EditarAlarmaRecibida.label
                        Screen.CrearAlarma.route -> Screen.CrearAlarma.contentDescription
                        else -> stringResource(R.string.top_bar_title)
                    }
                    title?.let { Text(it,modifier = Modifier.fillMaxWidth(), textAlign = TextAlign.Center, style = MaterialTheme.typography.titleMedium) }
                },
                navigationIcon = {
                    if (currentDestination === Screen.CrearAlarma.route){
                        IconButton(onClick = { navigateToWithState(Screen.Creadas.alternativeRoute.toString(), navController) }) {
                            Icon(imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                                    contentDescription = "",
                                    tint = MaterialTheme.colorScheme.onPrimary
                                )
                        }
                    }
                    if (currentDestination === Screen.EditarAlarma.route){
                        IconButton(onClick = { navigateToWithState(Screen.Creadas.route, navController) }) {
                            Icon(imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                                contentDescription = "",
                                tint = MaterialTheme.colorScheme.onPrimary
                            )
                        }
                    }
                    if (currentDestination === Screen.EditarAlarmaCompartida.route){
                    IconButton(onClick = { navigateToWithState(Screen.Enviadas.route, navController) }) {
                        Icon(imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                            contentDescription = "",
                            tint = MaterialTheme.colorScheme.onPrimary
                        )
                        }
                    }
                    if (currentDestination === Screen.EditarAlarmaRecibida.route){
                        IconButton(onClick = { navigateToWithState(Screen.Recibidas.route, navController) }) {
                            Icon(imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                                contentDescription = "",
                                tint = MaterialTheme.colorScheme.onPrimary
                            )
                        }
                    }
                },
                actions = {
                    if (currentDestination === Screen.CrearAlarma.alternativeRoute){
                        Button(stringResource(R.string.guardar_botton_texto), onClick = {  navigateToWithState(Screen.Creadas.route, navController)   })
                    }
                    if (currentDestination === Screen.CrearAlarma.route){
                        Button(stringResource(R.string.guardar_botton_texto), onClick = {
                            navigateToWithState(Screen.Creadas.route, navController)
                            scope.launch {
                                snackbarHostState.showSnackbar(crearAlarmaMensaje, withDismissAction = true)
                            }
                        })
                    }
                    if (currentDestination === Screen.EditarAlarma.route){
                        Button(stringResource(R.string.guardar_botton_texto), onClick = {
                            navigateToWithState(Screen.Creadas.route, navController)
                            scope.launch {
                                snackbarHostState.showSnackbar(actualizarAlarmaMensaje, withDismissAction = true)
                            }
                        })
                    }
                    if (currentDestination === Screen.EditarAlarmaCompartida.route){
                        Button(stringResource(R.string.guardar_botton_texto), onClick = {
                            navigateToWithState(Screen.Enviadas.route, navController)
                            scope.launch {
                                snackbarHostState.showSnackbar(actualizarAlarmaMensaje, withDismissAction = true)
                            }
                        })
                    }
                    if (currentDestination === Screen.EditarAlarmaRecibida.route){
                        Button(stringResource(R.string.guardar_botton_texto), onClick = {
                            navigateToWithState(Screen.Recibidas.route, navController)
                            scope.launch {
                                snackbarHostState.showSnackbar(actualizarAlarmaMensaje, withDismissAction = true)
                            }
                        })
                    }
                }
            )
        },
        floatingActionButton = {
            val navBackStackEntry by navController.currentBackStackEntryAsState()
            val currentDestination = navBackStackEntry?.destination?.route
            if (currentDestination === Screen.Creadas.route || currentDestination === Screen.Creadas.alternativeRoute){
                FloatingActionButton(
                    onClick = { navigateToWithState(Screen.CrearAlarma.route, navController) },
                ) {
                    Icon(Icons.Filled.Add, "", tint = MaterialTheme.colorScheme.onPrimary)
                }
            }
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
                                    indicatorColor = MaterialTheme.colorScheme.primaryContainer,
                                    unselectedTextColor = MaterialTheme.colorScheme.onPrimary
                                ),
                                selected = currentDestination?.hierarchy?.any {
                                    it.route == screen.route || (it.route == Screen.Creadas.alternativeRoute && it.route == screen.alternativeRoute)
                                } == true,
                                label = {
                                    Text(text = screen.label, color = MaterialTheme.colorScheme.onPrimary, modifier = Modifier.semantics { this.contentDescription = screen.contentDescription ?: "" })
                                },
                                onClick = {
                                    if (screen.alternativeRoute != null){
                                        navigateToWithState(screen.alternativeRoute, navController)
                                    }
                                    else if (screen.route != null){
                                        navigateToWithState(screen.route, navController)
                                    }

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
        NavHost(navController = navController, startDestination = Screen.Creadas.alternativeRoute.toString()) {
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
            composable(Screen.Enviadas.route){
                Box(modifier = Modifier.padding((innerPadding))){
                    AlarmasCompartidas(navigateTo = { route: String ->
                        navigateToWithState(
                            route,
                            navController
                        )
                    })
                }
            }
            composable(Screen.Recibidas.route){
                Box(modifier = Modifier.padding((innerPadding))){
                    AlarmasRecibidas(navigateTo = { route: String ->
                        navigateToWithState(
                            route,
                            navController
                        )
                    })
                }
            }
            composable(Screen.CrearAlarma.route){
                Box(modifier = Modifier.padding((innerPadding))){
                    CrearAlarma(navigateTo = { route: String ->
                        navigateToWithState(
                            route,
                            navController
                        )
                    })
                }
            }
            composable(Screen.EditarAlarma.route){
                Box(modifier = Modifier.padding((innerPadding))){
                    EditarAlarma(navigateTo = { route: String ->
                        navigateToWithState(
                            route,
                            navController
                        )
                    })
                }
            }
            composable(Screen.EditarAlarmaCompartida.route){
                Box(modifier = Modifier.padding((innerPadding))){
                    EditarAlarmaComaprtida(navigateTo = { route: String ->
                        navigateToWithState(
                            route,
                            navController
                        )
                    })
                }
            }
            composable(Screen.EditarAlarmaRecibida.route){
                Box(modifier = Modifier.padding((innerPadding))){
                    EditarAlarmaRecibida(navigateTo = { route: String ->
                        navigateToWithState(
                            route,
                            navController
                        )
                    })
                }
            }
            composable(Screen.CrearAlarmaNoDatos.route){
                Box(modifier = Modifier.padding((innerPadding))){
                    AlarmasCreadasNoDatos()
                }
            }
        }
    }
}
