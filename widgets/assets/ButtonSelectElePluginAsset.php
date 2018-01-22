<?php
/**
 * Created by PhpStorm.
 * User: bianjunping
 * Date: 2018/1/11
 * Time: 下午3:16
 */

namespace limefamily\widgets\assets;

use yii\web\AssetBundle;

class ButtonSelectElePluginAsset extends AssetBundle
{
    public $baseUrl = '@vendor/limefamily/widgets';
    public $js = [
        'js/buttonSelectEle.js',
    ];
    public $depends = [
        'yii\web\JqueryAsset',
    ];
}