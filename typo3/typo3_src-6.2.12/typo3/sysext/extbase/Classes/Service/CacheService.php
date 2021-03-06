<?php
namespace TYPO3\CMS\Extbase\Service;

/**
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */

/**
 * Cache clearing helper functions
 */
class CacheService implements \TYPO3\CMS\Core\SingletonInterface {

	/**
	 * @var \SplStack
	 */
	protected $pageIdStack;

	/**
	 * @var \TYPO3\CMS\Core\Cache\CacheManager
	 */
	protected $cacheManager;

	/**
	 * @param \TYPO3\CMS\Core\Cache\CacheManager $cacheManager
	 */
	public function injectCacheManager(\TYPO3\CMS\Core\Cache\CacheManager $cacheManager) {
		$this->cacheManager = $cacheManager;
	}

	/**
	 * Initializes the pageIdStack
	 */
	public function __construct() {
		$this->pageIdStack = new \SplStack;
	}

	/**
	 * @return \SplStack
	 */
	public function getPageIdStack() {
		return $this->pageIdStack;
	}

	/**
	 * Clears the page cache
	 *
	 * @param mixed $pageIdsToClear (integer) single or (array) multiple pageIds to clear the cache for
	 * @return void
	 */
	public function clearPageCache($pageIdsToClear = NULL) {
		if ($pageIdsToClear === NULL) {
			$this->cacheManager->flushCachesInGroup('pages');
		} else {
			if (!is_array($pageIdsToClear)) {
				$pageIdsToClear = array((int)$pageIdsToClear);
			}
			foreach ($pageIdsToClear as $pageId) {
				$this->cacheManager->flushCachesInGroupByTag('pages', 'pageId_' . $pageId);
			}
		}
	}

	/**
	 * Walks through the pageIdStack, collects all pageIds
	 * as array and passes them on to clearPageCache.
	 *
	 * @return void
	 */
	public function clearCachesOfRegisteredPageIds() {
		if (!$this->pageIdStack->isEmpty()) {
			$pageIds = array();
			while (!$this->pageIdStack->isEmpty()) {
				$pageIds[] = (int)$this->pageIdStack->pop();
			}
			$pageIds = array_values(array_unique($pageIds));
			$this->clearPageCache($pageIds);
		}
	}
}
