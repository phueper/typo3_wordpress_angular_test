<?php

// autoload.php @generated by Composer

require_once __DIR__ . '/composer' . '/autoload_real.php';




// autoload.php @generated by Helhum/ClassAliasLoader

return call_user_func(function() {
	$composerClassLoader = ComposerAutoloaderInit15a7af0058217cb86f1af836d1e85fa7::getLoader();
	$aliasClassLoader = new Helhum\ClassAliasLoader\Composer\ClassAliasLoader($composerClassLoader);

	$classAliasMap = require __DIR__ . '/composer/autoload_classaliasmap.php';
	$aliasClassLoader->setAliasMap($classAliasMap);
	$aliasClassLoader->setCaseSensitiveClassLoading(false);
	spl_autoload_register(array($aliasClassLoader, 'loadClassWithAlias'), true, true);

	return $aliasClassLoader;
});
