#pragma strict
var player : GameObject;

function Start () {
}

function Update () {

}

function OnTriggerEnter (other:Collider) {
	if(other.name == "Player" || other.name == "AI") {
		other.gameObject.renderer.material.color = Color.blue;
	}
}