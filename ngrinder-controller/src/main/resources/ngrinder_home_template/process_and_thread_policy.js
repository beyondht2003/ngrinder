function getProcessCount(total) {
	// if (total < 2) {
	// 	return 1;
	// }
	//
	// var processCount = 2;
    //
	// if (total > 80) {
	// 	processCount = parseInt(total / 40) + 1;
	// }
	//
	// if (processCount > 10) {
	// 	processCount = 10;
	// }
	// return processCount;
	// 修改进程/线程数分配策略，默认进程数为1
    return 1;
}

function getThreadCount(total) {
	var processCount = getProcessCount(total);
	return parseInt(total / processCount);
}
