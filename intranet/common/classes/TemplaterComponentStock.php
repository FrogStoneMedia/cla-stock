<?php
class TemplaterComponentStock extends TemplaterComponentTmpl
{ 
	protected $template = "../interface_default/stock/stock.html";
	public function Show($attributes)
	{
		global $args;
		return $this->CallTemplater($this->template, $args);
	}
}
?>