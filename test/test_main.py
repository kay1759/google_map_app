from fastapi.testclient import TestClient

import os
import sys
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))
from main import app

client = TestClient(app)

def test_read_en():
    response = client.get("/")
    assert response.status_code == 200

def test_read_ja():
    response = client.get("/ja/")
    assert response.status_code == 200

def test_read_locations_en():
    response = client.get("/api/en/locations")
    assert response.status_code == 200
    # assert response.json().__contains__("categories")
    assert "categories" in response.json()
    assert len(response.json()["categories"]) == 2

    assert "id" in response.json()["categories"][0]
    assert "title" in response.json()["categories"][0]
    
    assert response.json()["categories"][0]["id"] == 1
    assert response.json()["categories"][0]["title"] == "Building"
    assert response.json()["categories"][1]["id"] == 2
    assert response.json()["categories"][1]["title"] == "Spot"
    
    assert "resources" in response.json()
    assert len(response.json()["resources"]) == 12

def test_read_locations_ja():
    response = client.get("/api/ja/locations")
    assert response.status_code == 200
    assert "categories" in response.json()
    assert len(response.json()["categories"]) == 2

    assert "id" in response.json()["categories"][0]
    assert "title" in response.json()["categories"][0]
    
    assert response.json()["categories"][0]["id"] == 1
    assert response.json()["categories"][0]["title"] == "建物"
    assert response.json()["categories"][1]["id"] == 2
    assert response.json()["categories"][1]["title"] == "スポット"
    
    assert "resources" in response.json()
    assert len(response.json()["resources"]) == 12
