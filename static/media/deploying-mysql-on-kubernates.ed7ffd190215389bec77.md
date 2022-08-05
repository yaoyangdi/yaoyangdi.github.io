## Deploying Mysql on Kubernetes using PersistentVolume and Secrets

Kubernetes ***manifest*** for MySQL deployment:

```yaml
apiVersion: v1
kind: PersistentVolume            # Create a PersistentVolume
metadata:
  name: mysql-pv
  labels:
    type: local
spec:
  storageClassName: standard      # Storage class. A PV Claim requesting the same storageClass can be bound to this volume. 
  capacity:
   storage: 250Mi
  accessModes:
    - ReadWriteOnce
  hostPath:                       # hostPath PersistentVolume is used for development and testing. It uses a file/directory on the Node to emulate network-attached storage
    path: "/mnt/data"
  persistentVolumeReclaimPolicy: Retain  # Retain the PersistentVolume even after PersistentVolumeClaim is deleted. The volume is considered “released”. But it is not yet available for another claim because the previous claimant’s data remains on the volume. 
type: post

---    

apiVersion: v1
kind: PersistentVolumeClaim        # Create a PersistentVolumeClaim to request a PersistentVolume storage
metadata:                          # Claim name and labels
  name: mysql-pv-claim
  labels:
    app: polling-app
spec:                              # Access mode and resource limits
  storageClassName: standard       # Request a certain storage class
  accessModes:
    - ReadWriteOnce                # ReadWriteOnce means the volume can be mounted as read-write by a single Node
  resources:
    requests:
      storage: 250Mi
type: post
```