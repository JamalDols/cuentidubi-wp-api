<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'cuentidubi-wp-api' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '= c.<JC(KN#9y.6,BNJZC;ZKL~XxqQjqouI=RalW0bj<b)`2L2Y8v3d/HF<o$1R_' );
define( 'SECURE_AUTH_KEY',  '2-}9j$oLc//{B0[)_6zc5VCT[lrhpsQ[/X.4S,WaSJ3RdRclg]TGg{JJr!Ske2/I' );
define( 'LOGGED_IN_KEY',    'Zb-|7dR@!+X!{4|9n YN_H0aV)AgEQjOvz^@ntL1eR@3MD41=+8Dl~>qk-H@p(9s' );
define( 'NONCE_KEY',        'B9.Vkok|rtl_OgYVvc.WnCH}w]-f:6oBYt!rkJ}GApSw0h s.yThb`0eT9dgqpwu' );
define( 'AUTH_SALT',        ';g7p$jM0^ck{Tx=h<)9WR9:v#hXvL<`6<c?hlxwRZ@H]x=;XnN{,hzQ`Jy%Iz*k{' );
define( 'SECURE_AUTH_SALT', 'WCp8H>%nUxAW]Vf9S0b$aK}oVwephr_8(jZ[z^&_Hb^<%>1rP;jE|IC<ipe=FBtR' );
define( 'LOGGED_IN_SALT',   'v_I0~%}`AkaZf~LGr`p7I5*EJAvGOViG<wNyv0)Nn2g*,t+K%+HK@Lh6dznrag*F' );
define( 'NONCE_SALT',       'n&<z:<lTF+@j:}lM?qHIr5&<Y`@8g.cA=9X,#+uQQ/RXw]`N?nV694*-gv]OvExx' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
